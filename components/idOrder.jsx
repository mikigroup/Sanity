// dokumentace https://www.sanity.io/docs/studio-react-hooks

import {useMemoObservable} from 'react-rx'
import { useFormValue } from 'sanity'
import { useDocumentStore } from 'sanity'

 export function idOrder() {
  const docId = useFormValue(['_id'])
  const documentStore = useDocumentStore();
  const results = useMemoObservable(() => {
    return documentStore.listenQuery(
      `*[_type == 'order']`,
      {currentDoc: docId},
      {}
    )
  }, [documentStore, docId])
  
	return (
	  <div>{docId}</div>
	)
}


