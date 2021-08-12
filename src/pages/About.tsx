import { IonAvatar, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import image from '../images/Screenshot_20210618-173823_Video Player (2).jpg'

const About: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            
            <IonTitle>About</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonList>
                <IonItem routerLink="/home">
                    <IonLabel>
                        Home
                    </IonLabel>
                </IonItem>  
                <IonItem routerLink="/about">
                    <IonLabel>
                        About
                    </IonLabel>
                </IonItem> 
                <IonItem routerLink="/programmes">
                    <IonLabel>
                        Programmes
                    </IonLabel>
                </IonItem>   
            </IonList>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">About</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonCard>
                <IonAvatar>
                    <img src={image}></img>
                </IonAvatar>
                
                <h1>Justin Ho Lung</h1>
                <p>This is a brief description of Justin Ho Lung. <br></br> Lorem ipsum funny filler text.</p>
                <p>hello world</p>
            </IonCard>
            
        </IonContent>
      </IonPage>
    );
  };

export default About;