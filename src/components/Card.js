import React from "react";

// Below in the parameters, you can use destructering format within them.
// It's basically saying this: "const {name, email, id} = props;" inside the
// parameters.
const Card = ({name, email, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}test?200x200?`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;