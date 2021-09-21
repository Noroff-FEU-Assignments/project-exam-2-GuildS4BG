import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../constants/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormError from "./common/FormError";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("Enter your username"),
    password: yup.string().required("Enter your password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        try {
            const response = await axios.post(url, data);
        }
        catch (error) {
            setLoginError(error.toString());
        }
        finally {
            setSubmitting(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control {...register("username")} placeholder="Username..." />
                    <Form.Text className="">
                        {errors.username && <FormError>{errors.username.message}</FormError>}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")} type="password" placeholder="Please enter your password" />
                    <Form.Text className="text-muted">
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </fieldset>
        </Form>
    )
}