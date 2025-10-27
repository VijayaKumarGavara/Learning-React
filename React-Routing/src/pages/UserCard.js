export default function UserCard(props){
    const {firstName, lastName, company}=props?.details;
    return(
        <>
            <h4>{firstName+" "+lastName} - {company.title}</h4>
        </>
    )
}