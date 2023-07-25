import React, { useState } from "react";
import Image from "./Image";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";

function LoginForm({ onClick }) {
  return (
    <>
      <Image />
      <Input placeholder="Phone number, username, or email" />
      <Input placeholder="Password" type="password" />
      <Button value="Sign in" onClick={onClick} />
      <Heading heading="Don't have an Account?" sign="Sign up" onClick={onClick} />
    </>
  );
}

function SignupForm({ onClick }) {
  return (
    <>
      <Image />
      <Input placeholder="Phone number or email" />
      <Input placeholder="Full Name" type="text" />
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />
      <Button value="Sign up" onClick={onClick} />
      <Heading heading="Have an account?" sign="Sign in" onClick={onClick} />
    </>
  );
}

function Box() {
  const [sign, setSign] = useState(true);

  function handleBtn() {
    setSign((prev) => !prev);
  }

  return (
    <div className="box">
      {sign ? <LoginForm onClick={handleBtn} /> : <SignupForm onClick={handleBtn} />}
    </div>
  );
}

export default Box;
