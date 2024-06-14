import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBookList } from '../../Utility/LocalStorage';

const PagetoRead = () => {

    const books = useLoaderData();

    const [bookRead, setBookRead] = useState([]);

    useEffect(() => {
        const storeBookIds = getReadBookList();
        if (books.length > 0) {
            const readBook = books.filter(book => storeBookIds.includes(book.bookId))

            setBookRead(readBook);
        }
    }, [])


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className='mt-10 w-full max-w-[1150px] my-0 mx-auto mb-[100px] banner-bg lg:py-[75px] lg:pl-[115px]'>

            <BarChart
                width={window.innerWidth < 600 ? 400 : 900} 
                height={window.innerWidth < 600 ? 350 : 550}
                data={bookRead}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookRead.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>


        </div>
    );
};

export default PagetoRead;