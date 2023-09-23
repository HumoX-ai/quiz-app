import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface IFormInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface Data {
  name: string;
  username: string;
  email: string;
  password: string;
}

function Register() {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Data[]>([]);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      remember: false,
    },
  });

  useEffect(() => {
    const getData = async () => {
      const exists = await axios.get<Data[]>(
        "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login"
      );
      setDatas(exists.data);
      console.log(exists.data);
    };
    getData();
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const emailExist = datas.some((item) => item.email === data.email);
      setEmailExists(emailExist);
      console.log(emailExist);

      if (!emailExist) {
        setLoading(true);
        await axios.post(
          "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login",
          {
            name: data.name,
            username: data.username,
            result: 0,
            geografiya: 0,
            tarix: 0,
            onatili: 0,
            email: data.email,
            password: data.password,
          }
        );
        setLoading(false);
        reset();
        navigate("/login");
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Registratsiya
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ro'yxatdan o'tish uchun ma'lumotlarni kiriting.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Input
                size="lg"
                label="Ism"
                type="text"
                crossOrigin={undefined}
                color={errors.name ? "red" : undefined}
                {...register("name", { required: true })}
              />

              {errors.name && (
                <Typography className="text-red-500 flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ism kiritilmagan!
                </Typography>
              )}
            </div>
            <div>
              <Input
                size="lg"
                label="Username"
                type="text"
                crossOrigin={undefined}
                color={errors.username ? "red" : undefined}
                {...register("username", { required: true })}
              />

              {errors.username && (
                <Typography className="text-red-500 flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Username kiritilmagan!
                </Typography>
              )}
            </div>
            <div>
              <Input
                size="lg"
                label="Email"
                type="email"
                crossOrigin={undefined}
                {...register("email", { required: true })}
                color={errors.email ? "red" : undefined}
              />
              {errors.email && (
                <Typography className="text-red-500 flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Email kiritilmagan!
                </Typography>
              )}
            </div>
            <div>
              <Input
                size="lg"
                label="Parol"
                type="password"
                crossOrigin={undefined}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <Typography className="text-red-500 flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Parol kiritilmagan!
                </Typography>
              )}
            </div>
            <Typography color="red">
              {emailExists ? "Email band!" : ""}
            </Typography>
          </div>
          <Checkbox
            {...register("remember", { required: true })}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
          />
          {errors.remember && (
            <Typography className="text-yellow-900 flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Shartlarga rozi emasmisiz?!
            </Typography>
          )}

          <Button className="mt-6" fullWidth type="submit">
            {loading ? "Yuklanmoqda..." : "Registratsiya"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Allaqachon hisob mavjudmi?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Kirish
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
