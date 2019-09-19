import * as React from "react";
import {
    Form, 
    Input,
    Button
} from "antd";
import { FormComponentProps } from "antd/lib/form";

type LoginFormProps = FormComponentProps;

const LoginFormImpl: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const { form } = props;
    const { getFieldDecorator } = form;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("送信ボタンを押したね");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }


    return(
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
    );
}

export default Form.create<LoginFormProps>()(LoginFormImpl);