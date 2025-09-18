import { useActionState } from "react";

function validateForm(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { error: "Name is required!" };
  }

  return { success: true, message: "Form submitted!" };
}

export default function MyForm() {
  const [state, formAction, isPending] = useActionState(validateForm, null);

  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="Enter name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.message && <p style={{ color: "green" }}>{state.message}</p>}
    </form>
  );
}