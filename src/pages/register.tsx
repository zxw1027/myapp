import React, {useState} from 'react';
import styles from './register.less';
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {history} from "@@/core/history";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName]=useState("")
    async function submit() {
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password,name }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status !== 200) {
                console.error(await res.text());
                return;
            }
            const data = await res.json();
            alert(`欢迎回来，${data.name}`);
            history.push('/posts/create');
        } catch (err) {
            console.error(err)
        }
    }
    return <div className="w-full flex justify-center">
        <div className="container lg:px-64 px-8 pt-16">
            <p className="text-3xl font-extrabold">用户注册</p>
            <div className="mt-8">
                <p>用户名</p>
                <TextInput value={name} onChange={setName} />
                <p>邮箱</p>
                <TextInput value={email} onChange={setEmail} />
                <p className="mt-4">密码</p>
                <TextInput value={password} onChange={setPassword} />
                <Button onClick={submit}>注册</Button>
            </div>
        </div>
    </div>
}
