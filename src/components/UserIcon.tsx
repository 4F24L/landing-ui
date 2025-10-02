type UserImg = {
    imgUrl : string
}

const UserIcon = ({imgUrl}: UserImg) => {
  return (
    <img src={imgUrl} alt="User" className="size-10 rounded-full object-cover" />
  );
};

export default UserIcon;
