export default function UserCard(props){
    const {firstName, lastName, company}=props?.details;
    return(
        <>
        <div className="m-4 p-4 w-56 h-24 border-transparent bg-blue-400 rounded-lg font-semibold text-gray-950 text-shadow-white hover:bg-blue-600 hover:transition">
            <h4>{firstName+" "+lastName}</h4>
            <h4>{company.title}</h4>
        </div>
            
        </>
    )
}