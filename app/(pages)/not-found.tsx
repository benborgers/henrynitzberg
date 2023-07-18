import classNames from "classnames";
import { messapiaBold } from "./fonts";
import Button from "./Button";

export default function NotFound() {
  return (
    <div className="p-6 sm:min-h-screen grid place-items-center">
      <div className="space-y-6">
        <p
          className={classNames(
            "text-gray-50 font-bold text-3xl",
            messapiaBold.className
          )}
        >
          Page Not Found
        </p>

        <div className="flex justify-center">
          <Button href="/">Go to Homepage</Button>
        </div>
      </div>
    </div>
  );
}
