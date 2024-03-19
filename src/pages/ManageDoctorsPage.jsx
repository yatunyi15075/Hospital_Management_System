import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ManageDoctorsPage = () =>{
    //state to store the list of doctors
    const [doctors, setDoctors] = useState([]);

    //effect to fetch the list of doctors from the server (replace with actual API call)
    useEffect(() => {
        //simulated api call to fetch doctors
        const fetchDoctors = async () => {
            try{
                //replace with your actual api endpoint
                const response = await fetch('https://you-api-endpoint.com/doctors');
                if(!respomse.ok){
                    throw new Error('Failed to fetch doctors');
                }
                const data = await response.json();
                setDoctors(data);
            } catch(error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    //function to delete a doctor
    const deleteDoctor = async (id) =>{
        try{
            //replace this with your actual api endpoint
            const respomse = await fetch('https://your-api-endpoint.com/doctors/${id}', {
                method: 'DELETE',
            });
            if (!respomse.ok) {
                throw new Error('Failed to delete doctor');
            }
            //remove the deleted doctor from the list
            setDoctors(doctors.filter((doctor) => doctor.id !== id));
        } catch (error){
            console.error('Error deleting doctor:', error)
        }
    };

    return(
        <div>
            <h2>Manage Doctors</h2>
            <Link to="/admin/manage-doctors/add">Add Doctor</Link>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <div>{doctor.name}</div>
                        <div>{doctor.specialization}</div>
                        <div>
                            <Link to={`/admin/manage-doctors/edit/${doctor.id}`}>Edit</Link>
                            <button onClick={() => deleteDoctor(doctor.id)}>Delete</button>
                        </div>
                    </li>
                ) )}
            </ul>
        </div>
    )
    
};

export default ManageDoctorsPage;
