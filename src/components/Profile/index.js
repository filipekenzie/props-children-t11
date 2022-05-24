import TechList from "../TechList";

function Profile(props) {
  return (
    <>
      <label>{props.name}</label>
      <label>{props.age}</label>
      <TechList stack={props.stack} />
      <div>-----------------</div>
    </>
  );
}

export default Profile;
