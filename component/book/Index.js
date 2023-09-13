import { Avatar, Card, IconButton } from 'react-native-paper';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

function Index(){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Define your API endpoint
        const apiUrl = 'localhost:8080/books';
    
        // Make the API request using Axios
        axios.get(apiUrl)
          .then(response => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, []);

    return (
        <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data ? (
            <Card.Title
            title={JSON.stringify(data)}
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        ) : (
          <Text>No data available.</Text>
        )
      )}
    </View>
        
    )
}

export default Index;