import { Alert } from "../../components/Alert/Alert";
import { Controller, FormProvider } from "react-hook-form";
import { FormErrorFeedback } from "../../components/Form/FormErrorFeedback";
import { FormGroup } from "../../components/Form/FormGroup";
import { Input } from "../../components/Form/Input";
import { Label } from "../../components/Form/Label";
import { SubmitButton } from "../../components/Form/SubmitButton";

export const FooterForm = () => {
  return (
    <FormProvider>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* Name Input */}
          {/* <Controller
            name="name"
            render={({ field, fieldState: { error } }) => (
              <FormGroup>
                <Label>Name</Label>
                <Input {...field} autoComplete="name" />
                <FormErrorFeedback error={error} />
              </FormGroup>
            )}
          /> */}

          {/* Email Input */}
          {/* <Controller
            name="email"
            render={({ field, fieldState: { error } }) => (
              <FormGroup>
                <Label>Email</Label>
                <Input {...field} autoComplete="email" />
                <FormErrorFeedback error={error} />
              </FormGroup>
            )}
          /> */}

          {/* Message Input */}
          {/*  <Controller
            name="message"
            render={({ field, fieldState: { error } }) => (
              <FormGroup>
                <Label>Message</Label>
                <Input {...field} as="textarea" rows={5} />
                <FormErrorFeedback error={error} />
              </FormGroup>
            )}
          /> */}
        </div>

        {/* {isSuccess || isError ? (
          <Alert variant={isSuccess ? "success" : "danger"}>
            {isSuccess ? (
              <>We have received your message. Thank you!</>
            ) : (
              <>Oops! Something went wrong.</>
            )}
          </Alert>
        ) : null}

        <SubmitButton className="rounded-md" isPending={isPending}>
          Submit
        </SubmitButton> */}
      </form>
    </FormProvider>
  );
};
