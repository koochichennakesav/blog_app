import { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener("didFocus", () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        }
    }, []);

    return <View style={styles.container}>
        <Text>Index Screen</Text>
        <FlatList
            data={state}
            keyExtractor={blog => blog.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Show", { Id: item.id })}>
                        <View style={styles.blogContainer}>
                            <Text>{item.title}{' '}{item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name='trash' size={20} value={item.id} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    blogContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});

export default IndexScreen;