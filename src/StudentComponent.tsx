import * as React from "react";
import { useState } from "react";
import {
    Form, 
    Input,
    Button
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import axios from "axios";

type LoginFormProps = FormComponentProps;

const LoginFormImpl: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const { form } = props;
    const { getFieldDecorator } = form;
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`送信しますよ:${message}`);
            try {
                // アドレスが入る
                const result = await axios.get("localhost:8080/api/students");
                console.log(result);
            } catch(err) {
                console.log("error");
            }
    };

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
        <p>入力されたのは{message}でした。</p>
        </div>
    );
}

export default Form.create<LoginFormProps>()(LoginFormImpl);