import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  id: number;
  email: string;
  password: string;
};

const notify = () => {
  toast.error("Bunday foydlanauvchi mavjud emas!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (res) => {
    setLoading(true);
    try {
      const response = await axios.get<Inputs[]>(
        "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login"
      );
      const data = response.data;

      const user = data.find(
        (item) => item.email === res.email && item.password === res.password
      );

      setLoading(false);
      if (user) {
        navigate(`/users/${user.id}`);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        console.log("Foydalanuvchi topilmadi");
        notify();
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Kirish
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Kirish uchun ma'lumotlarni kiriting.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                crossOrigin={undefined}
                {...register("email", { required: true })}
                color={errors.email ? "red" : undefined}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                crossOrigin={undefined}
                {...register("password", { required: true })}
                color={errors.password ? "red" : undefined}
              />
            </div>

            <Button className="mt-6" fullWidth type="submit">
              {loading ? "Yuklanmoqda..." : "Kirish"}
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Yangi hisob yaratish -{" "}
              <Link to="/register" className="font-medium text-gray-900">
                Ro'yxatdan o'tish
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Login;
