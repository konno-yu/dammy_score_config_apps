import * as React from "react";
import { useState, useEffect } from "react";
import {
    Form, 
    Input,
    Button
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


type StudentType = {
    id: number,
    name: string
};
type StudentFormProps<StudentType> = FormComponentProps;


const LoginFormImpl: React.FC<StudentFormProps<StudentType>> = (props: StudentFormProps<StudentType>) => {
    const { form } = props;
    const { getFieldDecorator } = form;
    const [message, setMessage] = useState("");
    const [students, setStudents] = useState<StudentType[]>();

    useEffect(() => {
       loadStudents();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        registerStudent(message);
    };

    const registerStudent = async (name: string) => {
        try {
            const result = await axios({
                method: "POST",
                url: "http://localhost:8080/api/students",
                data: {id: -1, name: name}
            });
            console.log(result);
            loadStudents()
        } catch(err) {
            console.log("error");
        }
    }

    const loadStudents = async () => {
        await axios.get("http://localhost:8080/api/students").then((res) => setStudents(res.data));
        // setStzudents(students);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }


    return(
        <div>
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator("userName", {
                    rules: [{required: true, message: "ユーザ名を入力してね"}]
                })(<Input onChange={handleChange} placeholder="ユーザ名"/>)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Log in</Button>
            </Form.Item>
        </Form>
        { 
            students && students.map((s) => <p>{s.name}</p>)
        }
        </div>
    );
}

export default Form.create<StudentFormProps<StudentType>>()(LoginFormImpl);