import { Box } from '@mui/material';
import Image from 'next/image'

async function getData() {
  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Authorization': `bearer ${process.env.API_KEY}`
    }
  }
  let url = `${process.env.HOST}/api/document-categories?populate[0]=document&populate[1]=document.file_url`
  console.log(url);
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Document() {
  let { data } = await getData();
  return (
    <div>
      <ul>
        {
          data.map(elem => (
            <>
              <Box
                sx={{
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 4,
                  backgroundColor: 'oldlace',
                  alignSelf: 'flex-start',
                  marginHorizontal: '1%',
                  marginBottom: 6,
                  minWidth: '48%',
                  textAlign: 'left',
                }}
              >{elem.attributes.name}
                {elem.attributes.document.map(doc => (
                  <h1>{doc.name}</h1>
                ))}
              </Box>
            </>
          ))
        }
      </ul>
    </div >
  );
}
