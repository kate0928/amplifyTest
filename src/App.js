
import './App.css';
import { useState } from 'react';//這是什麼?-為什麼是從form react?
import { NavBar,NoteUICollection, CreateNote,UpdateNote} from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify'


function App({ signOut }) {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  return (
    <>
<NavBar
  marginBottom='20px' width='100%'
  overrides={{
    Button38464645: { onClick: () => setShowCreateModal(true) },
    Button38464646: {
      onClick: async () => {
        await DataStore.clear()
        signOut()
      }
    }
  }}
/>
      <div className='container'>
      <NoteUICollection overrideItems={({ item, idx }) => {
  return {
    overrides: {
      Vector38464617: {//這段數字是哪裡來的?-該compoent是群組
        // as: 'button', 這是什麼? 為什麼隱藏就不見
        onClick: () => {
          setShowUpdateModal(true)
          setUpdateNote(item)
        }
      }
    }
  }
}}
/>
      </div>
      <div className='modal' style={{ display: showCreateModal === false && 'none' }}>
        <CreateNote overrides={{
    MyIcon: {
      as: 'button',
      onClick: () => setShowCreateModal(false)
    }
  }}/>
      </div>
      <div className='modal' style={{ display: showUpdateModal === false && 'none' }}>
  <UpdateNote
    note={updateNote} overrides={{
      MyIcon: {
        as: 'button',
        onClick: () => setShowUpdateModal(false)
      }
    }}
  />
</div>
    </>
  )
}

export default withAuthenticator(App)
