'use client'

import {Mybutton, MyInput} from "@commons/ui";

import { useForm } from "react-hook-form";

interface ISchema {
  banana: string
}

export default function Home() {
  const { register, formState} = useForm<ISchema>()


  return (
    <div>
      <div>여기는 사장님 프로젝트 입니다.</div>
      <div>공통컴포넌트를 모노레포에서 공유합니다.</div>
      <MyInput<ISchema> type="text" register={register} name="banana"/>
      <Mybutton formState={formState}>등록하기</Mybutton>
    </div>
  );
}
