 import React, {Component} from 'react';
 //import { BlockPicker } from 'react-color';
 import { 
    EditorState,
    SelectionState,
    Modifier,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Typo from "typo-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../index.css';
import {affData, dictionaryData} from "../utils/dictionaryData"
//import PropTypes from 'prop-types';




export default class RichTextExample extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            lastOffset:0
        };
        this.handleBeforeInput = this.handleBeforeInput.bind(this);
    }
    
    onEditorStateChange = (editorState) => {
        this.setState({ editorState });
    }
    
    // componentDidMount() {
    //     const {editorState} = this.state;
    //     const currentContent = editorState.getCurrentContent(),
    //     currentSelection = editorState.getSelection();
    //     const newContent = Modifier.replaceText(
    //         currentContent,
    //         currentSelection,
    //         'A'
    //         );
    //         const newEditorState = EditorState.push(editorState, newContent, 'insert-characters');
    //         this.setState({
    //             editorState: newEditorState
    //         });
    //     }
        
        handleBeforeInput(chars, editorState) {
            if(chars == ' '){
                const selectionState = editorState.getSelection();
                const anchorKey = selectionState.getAnchorKey();
                const contentState = editorState.getCurrentContent();
                const currentContentBlock = contentState.getBlockForKey(anchorKey);
                const blockText = currentContentBlock.getText();
                const result = blockText.slice(this.state.lastOffset, selectionState.getEndOffset());
                var dictionary = new Typo("en_US",affData, dictionaryData);
                var is_spelled_correctly = dictionary.check(result);
                console.log(result, is_spelled_correctly, this.state.lastOffset);
                if (!is_spelled_correctly) {
                    var array_of_suggestions = dictionary.suggest(result);
                    console.log(array_of_suggestions.length);
                    if(array_of_suggestions.length > 0){
                        let replaceText = array_of_suggestions[0]+' ';
                        const blockKey = currentContentBlock.getKey();
                        let replaced = Modifier.replaceText(
                            contentState,
                            SelectionState.createEmpty(blockKey)
                            .merge({
                                anchorKey: blockKey,
                                anchorOffset: this.state.lastOffset,
                                focusKey: blockKey,
                                focusOffset: selectionState.getEndOffset(),
                            }),
                            replaceText
                            );
                            let newOffset = selectionState.getEndOffset() + (replaceText.length - result.length);
                            this.setState({editorState:
                                EditorState.push(
                                    editorState,
                                    replaced
                                    )
                                    , lastOffset: newOffset});
                                    return true;
                                }
                            } 
                            this.setState({editorState, lastOffset: selectionState.getEndOffset()});
            }
        }
        
                    
    render() {
        return (
           
            <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}
                handleBeforeInput={this.handleBeforeInput}
                handleKeyCommand={this.handleKeyCommand}
                keyBindingFn={this.myKeyBindingFn}
                spellCheck={false}
                autocorrect="off"
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                toolbarOnFocus={true}
           />

        );
    }
}