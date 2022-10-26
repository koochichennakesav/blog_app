import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam("Id");
    const blogPost = state.find(blog => blog.id === id);

    return (
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { Id: navigation.getParam("Id") })}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        ),
    };
};

export default ShowScreen;