const Movies = (props) => {
    return (
        <div className="movies">
            {props.name};
            {props.year};
            {props.rating};
            {props.img}

        </div>
    );
}

export default Movies;