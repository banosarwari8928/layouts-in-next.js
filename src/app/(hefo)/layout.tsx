
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html>
    <body>
        <nav className="bg-blue-200" style={{background:'skyblue', display:'flex',alignItems:"center",  boxShadow:'inherit', height:'30px',width:'100vw' , textAlign:'center',justifyContent:'center'}}>This is my navbar</nav>    <h1 style={{color:"green", fontFamily:"cursive",  borderRadius:"5px" ,padding:"4px",textAlign:"center", alignItems:"center", width:"30%", margin:"auto 0px" }}></h1>
    <h1>{children}</h1>
     <footer style={{backgroundColor:'yellowgreen',boxShadow:"0.5px  0.9px 9px gray",  display:'flex',alignItems:"center", height:'30px',width:'100vw' , textAlign:'center',justifyContent:'center'}}>This is my Footer</footer>

     </body>
     </html>
  );
}
