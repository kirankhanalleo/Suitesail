export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            src={
              params.row.img ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
            }
            alt=""
            className="cellImg"
          />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "phone", headerName: "Phone", width: 230 },
  { field: "country", headerName: "Country", width: 130 },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "name", headerName: "Hotel Name", width: 200 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "title", headerName: "Title", width: 230 },
  { field: "city", headerName: "City", width: 120 },
];

export const roomsColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "title", headerName: "Title", width: 230 },
  { field: "desc", headerName: "Description", width: 250 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "maxPeople", headerName: "Max People", width: 100 },
];
