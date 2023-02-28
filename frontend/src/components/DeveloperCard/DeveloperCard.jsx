import Card from 'react-bootstrap/Card';

function DeveloperCard (props) {
  return (
    <Card class="card h-100">
        <Card.Img variant="top" src={props.image}></Card.Img>
        <Card.Body>
            <Card.Title><h5>{props.name}</h5></Card.Title>
            <Card.Text><h6>@{props.user}</h6></Card.Text>
            <Card.Text><h6>{props.role}</h6></Card.Text>
            <Card.Text>{props.bio}</Card.Text>
        </Card.Body>
        <Card.Footer> 
            <small class="text-muted">Commits: </small>
            <small>{props.commits}</small>
            <br></br>
            <small class="text-muted">Issues: </small>
            <small>{props.issues}</small>
            <br></br>
            <small class="text-muted">Unit Tests: </small>
            <small>{props.unittests}</small>
        </Card.Footer>
    </Card>
);
}

export default DeveloperCard;