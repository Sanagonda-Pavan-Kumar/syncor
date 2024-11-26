import { eq } from 'drizzle-orm';
import { db } from '@/utils/db';
import { BackendError } from '@/utils/errors';
import { Contactus } from '@/schema/Contactus';









export async function addContactus(firstName: string, lastName: string, email: string, phoneNumber: string,message: string) {

  console.log("checking")
  const newContact = await db.insert(Contactus).values({firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber,message:message});

  if (!newContact) {
    throw new BackendError('INTERNAL_ERROR', {
      message: 'Failed to add employee',
    });
  }

  return newContact;
}



  

