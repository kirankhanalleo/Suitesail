import React from 'react';
import "./Table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const rows=[
    { 
        id: 1, 
        product: "Sony ILX-LR1", 
        img: "https://www.dpreview.com/files/p/articles/7855515647/sony_ilxlr1_3q.jpeg", 
        customer: "John Doe", date: "1 Jan", 
        amount: 40000, 
        method: "Cash on Delivery", 
        status: "Approved",
    },
    { 
        id: 2, 
        product: "Samsung Galaxy S22 Ultra", 
        img: "https://www.tccq.com/image/cache/catalog/1109296/Samsung-Galaxy-S22-Ultra-256Gb-Burgundy-in-Qatar-600x600.jpg", 
        customer: "Jane Smith", 
        date: "5 Feb", 
        amount: 35000, 
        method: "Credit Card", 
        status: "Approved", 
    },
    { 
        id: 3, 
        product: "Apple iVision Pro", 
        img: "https://www.apple.com/newsroom/images/media/Apple-WWCD23-Vision-Pro-glass-230605_big.jpg.large.jpg", 
        customer: "Michael Johnson", 
        date: "12 Mar", 
        amount: 60000, 
        method: "PayPal", 
        status: "Pending",
    },
    { 
        id: 4, 
        product: "HP Spectre X360", 
        img: "https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/h/p/hp_spectre_x360_16_2022_price_nepal.jpg", 
        customer: "Emily Davis", 
        date: "18 Apr", 
        amount: 55000, 
        method: "Debit Card", 
        status: "Approved", 
    },
    { 
        id: 5, 
        product: "Dell Inspiron 15", 
        img: "https://images-cdn.ubuy.co.in/633aae8db52ac20d0b37956e-dell-inspiron-15-3000-laptop-2021.jpg", 
        customer: "William Wilson", 
        date: "3 May", 
        amount: 48000, 
        method: "Cash on Delivery", 
        status: "Approved", 
    },
    { 
        id: 6, 
        product: "Lenovo ThinkPad X1", 
        img: "data:image/jpeg;base64,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", 
        customer: "Amanda Anderson", 
        date: "9 Jun", 
        amount: 52000, 
        method: "Credit Card", 
        status: "Approved", 
    },
];
function List(){
    return (
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                                </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>
                                    {row.status}
                                </span>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                 </Table>
            </TableContainer>
    )
}

export default List