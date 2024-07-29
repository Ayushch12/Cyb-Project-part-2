// src/pages/students/components/students-table/index.tsx
import React, { useEffect, useState } from 'react';
import DataTable from '@/components/shared/data-table';
import { columns } from './columns';
import StudentTableActions from './student-table-action';
import { getStudents } from '@/lib/api'; // Ensure the path is correct
import { Employee } from '@/constants/data'; // Ensure the path is correct



const StudentsTable: React.FC = () => {
  const [users, setUsers] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    async function fetchStudents() {
      setLoading(true);
      const data = await getStudents(0, 10, '');
      setUsers(data);
      setPageCount(Math.ceil(data.length / 10)); // Adjust this according to your pagination logic
      setLoading(false);
    }

    fetchStudents();
  }, []);

  return (
    <>
      <StudentTableActions />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
};

export default StudentsTable;
