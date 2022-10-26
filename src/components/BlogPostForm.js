import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(newValue) => setTitle(newValue)}
            />
            <Text style={styles.label}>Enter Content</Text>

            <TextInput
                style={{ ...styles.input, marginBottom: 10 }}
                value={content}
                onChangeText={(newValue) => setContent(newValue)}
            />

            <Button title="Save" onPress={() => {
                onSubmit(title, content);
            }} />
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default BlogPostForm;