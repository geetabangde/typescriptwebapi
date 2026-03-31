import axios, { type AxiosResponse } from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const fetchData = async () => {
    try {
        const response : AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("todo:", response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            if(error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
        console.error('Error fetching data:', error);
    }
}