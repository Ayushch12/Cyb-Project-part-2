import axios from 'axios';

// ---------------------------- Employe API ------------------------------------------------- //

export async function getStudents(
  offset: number,
  pageLimit: number,
  country: string
) {
  try {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
        (country ? `&search=${country}` : '')
    );
    return res.data;
  } catch (error) {
    console.log('Error fetching students:', error);
    return error;
  }
}


 ///  ----------- For the delete Section --------------------------------    //
export async function deleteStudent(id: number) {
  try {
    const res = await axios.delete(`https://api.slingacademy.com/v1/sample-data/users/${id}`);
    return res.data;
  } catch (error) {
    console.log('Error deleting student:', error);
    throw error;
  }
}
