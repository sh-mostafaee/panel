export default function PostIdPage(props) {
    console.log(props, 'props is herer');
    return (
        <div>
            <h1>This is single post page, id: {props.params.postId}</h1>
        </div>
    )
}