import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import CategoryRepository from '~/repositories/CategoryRepository';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            loading: false,
        };
    }
    componentDidMount() {
        this.fetchCategories();
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    
    fetchCategories = async () => {
        console.log('Fetching categories');
        try {
            this.setState({ loading: true });
            const categories = await CategoryRepository.getRecords();
            this.setState({ categories });
            this.setState({ loading: false });
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {this.state.categories.map(category => (
                    <Menu.Item key={category.id}>
                        <a href={`/shop?category=${category.slug}`}>
                            {category.name}
                        </a>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}

export default PanelCategories;
