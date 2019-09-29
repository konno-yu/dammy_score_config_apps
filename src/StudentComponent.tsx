import * as React from "react";
import { useState, useEffect } from "react";
import {
    Form,
    Input,
    Button,
    Table,
    Tag,
    Divider,
    Icon,
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import axios from "axios";
import { TableComponents } from "antd/lib/table";
import { render } from "react-dom";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


type StudentType = {
    id: number,
    studentNumber: string,
    lastName: string,
    firstName: string
    faculityId: number,
    classId: number,
    entranceYear: number
};
type StudentFormProps<StudentType> = FormComponentProps;


const LoginFormImpl: React.FC<StudentFormProps<StudentType>> = (props: StudentFormProps<StudentType>) => {
    const { form } = props;
    const { getFieldDecorator } = form;
    const { Column, ColumnGroup } = Table;

    const [message, setMessage] = useState("");
    const [students, setStudents] = useState<StudentType[]>();
    const [isEditMode, changeEditMode] = useState(false);
    const [editingId, changeEditingId] = useState(-1);

    const dammyData: StudentType[] = [
        {
            id: 1,
            studentNumber: "GSB1000",
            lastName: "ためかわ",
            firstName: "ゆういち",
            faculityId: 1,
            classId: 3,
            entranceYear: 2009
        },
        {
            id: 2,
            studentNumber: "GSB1001",
            lastName: "おおかわ",
            firstName: "ゆうじ",
            faculityId: 1,
            classId: 4,
            entranceYear: 2009
        }
    ];

    const columns = [
        { title: "Id", dataIndex: "id", key: "id", editable: false},
        { title: "StudentNumber", dataIndex: "studentNumber", key: "studentNumber", editable: true},
        { title: "FirstName", dataIndex: "firstName", key: "firstName", editable: true},
        { title: "ClassId", dataIndex: "classId", key: "classId", editable: true},
        { title: "EntranceYear", dataIndex: "entranceYear", key: "entranceYear", editable: true},
        { title: "", key: "action", render: (record: StudentType) => (
            <span>
            {
                !isEditMode ?
                    <span>
                        <a onClick={() => {changeEditingId(record.id);changeEditMode(!isEditMode)}}><Icon type="edit"/></a>
                        <Divider type="vertical" />
                        <a><Icon type="delete"/></a>
                    </span>
                :
                    <span>
                        <a onClick={() => changeEditMode(!isEditMode)}><Icon type="save"/></a>
                        <Divider type="vertical" />
                        <a onClick={() => changeEditMode(!isEditMode)}><Icon type="alipay-circle"/></a>
                    </span>
            }
            </span>
        )}
    ]

    const editableCell = () => {

    }


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

    const createCell = (text: string, record: StudentType, index: number) => (
        <span>
            {
                (isEditMode && record.id === editingId)?
                    <span>
                    {
                        getFieldDecorator("entranceIndex", {
                            rules: [{required: true, message: "unko"}],
                            initialValue: text
                        })(<Input size="large" placeholder="入学年度"/>)
                    }
                    </span>
                :
                    <span>{record.classId}</span>
            }
        </span>
    )
    return(
        <div style={{width: '100%', margin: 10}}>
        <Table dataSource={dammyData} columns={columns} bordered>
            {/* <Column
                title="入学年度"
                dataIndex="entranceYear"
                key="entranceYear"
                render={(text, record: StudentType, index) => createCell(text, record, index)}/>
            <Column title="学籍番号" dataIndex="studentNumber" key="studentNumber"/>
            <Column title="姓" dataIndex="lastName" key="lastName"/>
            <Column title="名" dataIndex="firstName" key="firstName"/>
            <Column title="学部" dataIndex="faculityId" key="faculityId"/>
            <Column title="クラス" dataIndex="classId" key="classId"/>
            <Column
                title=""
                key="action"
                render={(text, record: StudentType) => (
                    <span>
                    {
                        !isEditMode ?
                            <span>
                                <a onClick={() => {changeEditingId(record.id);changeEditMode(!isEditMode)}}><Icon type="edit"/></a>
                                <Divider type="vertical" />
                                <a><Icon type="delete"/></a>
                            </span>
                        :
                            <span>
                                <a onClick={() => changeEditMode(!isEditMode)}><Icon type="save"/></a>
                                <Divider type="vertical" />
                                <a onClick={() => changeEditMode(!isEditMode)}><Icon type="alipay-circle"/></a>
                            </span>
                    }
                    </span>
                )}/> */}
        </Table>
        </div>
    );
}

export default Form.create<StudentFormProps<StudentType>>()(LoginFormImpl);