import React, { useState } from 'react';
import { View, TextInput, Button, Share, Alert } from 'react-native';
import uuid from 'react-native-uuid';

const JoinSpace = () => {
    const [spaceName, setSpaceName] = useState('');

    // Function to create a new space and generate an invitation link
    const createSpace = async () => {
        const spaceId = uuid; // Generate a unique ID
        const invitationLink = `https://yourapp.com/invite/${spaceId}`;
        
        // Simulate saving space to database (replace with your actual database code)
        await saveSpaceToDatabase(spaceId, spaceName);
        
        // Share the invitation link
        shareLink(invitationLink);
    };

    // Simulated function to save the space (replace with your database code)
    const saveSpaceToDatabase = async (id, name) => {
        // Here you would save the space details to your database
        console.log(`Saving space: ID = ${id}, Name = ${name}`);
    };

    // Function to share the invitation link
    const shareLink = async (link) => {
        try {
            await Share.share({
                message: `Join my space: ${link}`,
            });
        } catch (error) {
            Alert.alert('Error sharing the link', error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter space name"
                value={spaceName}
                onChangeText={setSpaceName}
                style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <Button title="Create Space" onPress={createSpace} />
        </View>
    );
};

export default JoinSpace();
