import React, { Component } from "react";
import photosDataService from "../services/insta.service";
import '../styles/photo.css'
import ReactionsComponent from "./reactions.component";
import CommentsComponent from "./comments.component";

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);
        
        this.state = {
            currentTutorial: {
                id: props.tutorial.id,
                title: props.tutorial.title,
                description: props.tutorial.description,
                published: props.tutorial.published,
                url: props.tutorial.url,
            },
            message: "",
        };
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        const { tutorial } = nextProps;
        if (prevState.currentTutorial.id !== tutorial.id) {
            return {
                currentTutorial: tutorial,
                message: ""
            };
        }
        return prevState.currentTutorial;
    }
    
    componentDidMount() {
        this.setState({
            currentTutorial: this.props.tutorial,
        });
    }

    onChangeTitle(e) {
        const title = e.target.value;
        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: title,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;
        this.setState((prevState) => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                description: description,
            },
        }));
    }

    updatePublished(status) {
        photosDataService.update(this.state.currentTutorial.id, {
            published: status,
        })
        .then(() => {
            this.setState((prevState) => ({
                currentTutorial: {
                    ...prevState.currentTutorial,
                    published: status,
                },
                message: "The status was updated successfully!",
            }));
        })
        .catch((e) => {
            console.log(e);
        });
    }
    
    updateTutorial() {
        const data = {
            title: this.state.currentTutorial.title,
            description: this.state.currentTutorial.description,
            url: this.state.currentTutorial.url,
        };
        
        photosDataService.update(this.state.currentTutorial.id, data)
        .then(() => {
            this.setState({
                message: "The photo was updated successfully!",
            });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    deleteTutorial() {
        photosDataService.delete(this.state.currentTutorial.id)
        .then(() => {
            this.props.refreshList();
        })
        .catch((e) => {
            console.log(e);
        });
    }
    
    render() {
        const { currentTutorial } = this.state;
        return (
        <div className="photo-container">
            <div className="photo">
                {currentTutorial ? (
                <div className="edit-form">
                    <form>
                        <h4>{currentTutorial.title}</h4>
                        <h4>{currentTutorial.description}</h4>
                        < ReactionsComponent />
                        < CommentsComponent />
                    </form>
                </div>
                ) : (
                <div>
                </div>
                )}
            </div>
        </div>
        );
    }
}