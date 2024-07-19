// import axios from 'axios';
// // ---------------------------- Employe API ------------------------------------------------- //

// export async function getStudents(
//   offset: number,
//   pageLimit: number,
//   country: string
// ) {
//   try {
//     const res = await axios.get(
//       `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
//         (country ? `&search=${country}` : '')
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }




// src/lib/api.ts
import axios from 'axios';
import { Employee } from '../constants/data'; // Ensure the path is correct

export async function getStudents(
  offset: number,
  pageLimit: number,
  country: string
): Promise<Employee[]> {
  try {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
        (country ? `&search=${country}` : '')
    );
    return res.data.users.map((user: any) => ({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      date_of_birth: user.date_of_birth,
      street: user.street,
      city: user.city,
      state: user.state,
      country: user.country,
      zipcode: user.zipcode,
      longitude: user.longitude,
      latitude: user.latitude,
      job: user.job,
      profile_picture: user.profile_picture,
    }));
  } catch (error) {
    console.log('Error fetching students:', error);
    return [];
  }
}
