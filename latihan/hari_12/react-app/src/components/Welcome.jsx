export default function Welcome(props) {
    return (
        
        <div className="card">
            <h1>Hello, <span style={{ color: props.color }}>{props.name}</span></h1>
        </div>
    );
  }