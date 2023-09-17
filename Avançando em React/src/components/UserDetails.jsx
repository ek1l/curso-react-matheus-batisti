// eslint-disable-next-line react/prop-types
const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div style={{ margin: '20px' }}>
      <li>{nome}</li>
      <li>{idade}</li>
      <li>{profissao}</li>
    </div>
  );
};

export default UserDetails;
