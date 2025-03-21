import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';

  function Title(props) {
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
      </>
    );
  }


export default function PaginaInicial() {
    const [username, setUsername]= React.useState('');
    const [avatar, setAvatar] = React.useState('https://via.placeholder.com/180.png?text=+')
    const roteamento = useRouter();
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[300],
            backgroundImage: 'url(https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/mainpage/office-social-min.png/_jcr_content/renditions/original)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', 
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[999], opacity: 0.9,
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){
                roteamento.push(`/chat?username=${username}`);
                infosDoEvento.preventDefault();
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' },  textAlign: 'center', marginBottom: '32px',
              } }
            >
              <Title tag="h2">Bem vinde! Só funcionamos das 9h às 17h.</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
                {appConfig.name}
              </Text>

 
              <TextField
                value={username}
                onChange={function Handler(event){
                    const valor = event.target.value;
                    setUsername(valor);
                    if(valor.length > 2) {
                      setAvatar(`https://github.com/${valor}.png`)
                  } else {
                      setAvatar('https://via.placeholder.com/180.png?text=+')
                  }
                }}
              
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              /> 
              <Button

                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[200],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>

            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={avatar}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[300],
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
