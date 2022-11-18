// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import React from 'react'
import { MdSettings, MdStar } from 'react-icons/md'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .icon(() => <span><MdSettings /></span>)
                .child(
                    S.editor()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.listItem()
            .title('Featured Games')
            .icon(() => <span><MdStar /></span>)
            .child(
                S.editor()
                    .schemaType('featuredGames')
                    .documentId('featuredGames')
            ),
            // Add a visual divider (optional)
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems()
                .filter(listItem => !['featuredGames'].includes(listItem.getId()))
                .filter(listItem => !['settings'].includes(listItem.getId()))
        ])