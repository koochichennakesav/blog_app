import { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam("Id");
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(blog => blog.id === id);

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.navigate("Index"))
        }}
    />
}

export default EditScreen;