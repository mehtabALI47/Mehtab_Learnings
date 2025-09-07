function NestedLooping() {
  const college = [
    {
      name: "IMCB",
      sector: "F-7/3",
      city: "Islamabad",
      students: [
        { stName: "Mehtab", class: "12th", section: "A" },
        { stName: "Ali", class: "11th", section: "B" },
        { stName: "Zain", class: "12th", section: "C" },
        { stName: "Ahsan", class: "10th", section: "A" },
        { stName: "Usman", class: "11th", section: "B" },
      ],
    },
    {
      name: "Fazaia College",
      sector: "E-9",
      city: "Islamabad",
      students: [
        { stName: "Hassan", class: "11th", section: "A" },
        { stName: "Bilal", class: "10th", section: "C" },
        { stName: "Hamza", class: "12th", section: "B" },
        { stName: "Ahmad", class: "12th", section: "A" },
        { stName: "Tariq", class: "11th", section: "C" },
      ],
    },
    {
      name: "Punjab College",
      sector: "Main Boulevard",
      city: "Lahore",
      students: [
        { stName: "Salman", class: "12th", section: "A" },
        { stName: "Kashif", class: "11th", section: "B" },
        { stName: "Haris", class: "10th", section: "A" },
        { stName: "Adeel", class: "11th", section: "C" },
        { stName: "Fahad", class: "12th", section: "B" },
      ],
    },
    {
      name: "NED College",
      sector: "University Road",
      city: "Karachi",
      students: [
        { stName: "Saad", class: "10th", section: "A" },
        { stName: "Zeeshan", class: "11th", section: "C" },
        { stName: "Owais", class: "12th", section: "B" },
        { stName: "Amaan", class: "10th", section: "A" },
        { stName: "Shayan", class: "12th", section: "C" },
      ],
    },
    {
      name: "Edwardes College",
      sector: "Mall Road",
      city: "Peshawar",
      students: [
        { stName: "Rehan", class: "12th", section: "A" },
        { stName: "Waleed", class: "11th", section: "B" },
        { stName: "Imran", class: "10th", section: "C" },
        { stName: "Asif", class: "12th", section: "B" },
        { stName: "Noman", class: "11th", section: "A" },
      ],
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>College Details</h2>
      {college.map((col, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "lightgray",
            padding: "10px",
            width: "450px",
          }}
        >
          <h3>{col.name}</h3>
          <ul>
            <li>{col.sector}</li>
            <li>{col.city}</li>
            <li>Students Detail
                {
                    col.students.map((item)=>(
                        <ol style={{margin:"10x", borderBottom:"1px solid black"}}>
                         <li>{item.stName}</li>
                         <li>{item.class}</li>
                         <li>{item.section}</li>
                      </ol>
                    ))
                }
             

            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
export default NestedLooping;
