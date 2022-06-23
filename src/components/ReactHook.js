import { useForm } from "react-hook-form";

const ReactHook=()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                First name:{" "}
                <input type="text" {...register("firstname", { required: true })} />

            </label>

            <label>
                Last name:{" "}
                <input
                    type="password"
                    {...register("lastname", { required: true })}
                />

            </label>
            Country:{" "}
            <select name="country"
                    {...register("country", { required: true })}
            >
                <option value="Ukraine" >Ukraine</option>
                <option value="USA" >USA</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );

}

export default ReactHook;