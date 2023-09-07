add the chrome extension React Context DevTool

create a context outside of the class:
let UserContext = createContext();

const passData=()=>{
const [name,setName] = useState("raja");
return(
<UserContext.provider value={name}>
{children}
</UserContext.provider>
)
}

to access the value:
const data = useContext(UserContext);
