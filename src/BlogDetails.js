import { useParams } from "react-router-dom"
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch('http://localhost:3000/blogs/' + id)

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by <span style={{ color: '#949494' }}>{ blog.author }</span></p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
    )
}

export default BlogDetails