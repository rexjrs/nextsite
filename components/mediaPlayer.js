import React from 'react';

export default class Media extends React.Component {
    render() {
        return (
            <div className="media-container">
                <iframe width="100%" height="50"
                    src="https://www.youtube.com/embed/D9AFMVMl9qE">
                </iframe>
                <style jsx>{`
                    .media-container{
                        position: fixed;
                        bottom: 0;
                        right: 0;
                        left: 0;
                    }
                `}</style>
            </div>
        )
    }
}