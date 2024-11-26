import { addContactus } from "@/services/user-services";
import { createHandler } from "@/utils/create";
import { BackendError } from "@/utils/errors";
import { addContatctusSchema } from "@/schema/Contactus";

// ContactUs Handler

export const handleContactus = createHandler(
  addContatctusSchema,
  async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    console.log("Handling Contact Us request");

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      throw new BackendError("BAD_REQUEST", {
        message: "All fields are required",
      });
    }

    const addedContactus = await addContactus(
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );

    res.status(201).json({
      message: "User Contact Details",
      user: addedContactus,
    });
  }
);
