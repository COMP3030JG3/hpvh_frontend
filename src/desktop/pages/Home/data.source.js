import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const Nav30DataSource = {
    wrapper: { className: 'header3 home-page-wrapper jzih1dpqqrg-editor_css' },
    page: { className: 'home-page k87mate2qet-editor_css' },
    logo: {
        className: 'header3-logo jzjgnya1gmn-editor_css',
        children: '/logo.svg',
    },
    Menu: {
        className: 'header3-menu',
        children: [
            {
                name: 'item1',
                className: 'header3-item',
                children: {
                    href: '#',
                    children: [
                        {
                            children: (
                                <span>
                                    <span>
                                        <FormattedMessage id="home.nav.language" />
                                    </span>
                                </span>
                            ),
                            name: 'text',
                            className: 'k87m1uuzaug-editor_css',
                        },
                    ],
                },
                subItem: [
                    {
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item jzj8295azrs-editor_css',
                            children: [
                                {
                                    name: 'English',
                                    className: '',
                                    children: (
                                        <span>
                                            <p>English</p>
                                        </span>
                                    ),
                                },
                            ],
                        },
                        name: 'en',
                    },
                    {
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item jzj8295azrs-editor_css',
                            children: [
                                {
                                    name: '中文',
                                    className: '',
                                    children: (
                                        <span>
                                            <span>
                                                <p>中文</p>
                                            </span>
                                        </span>
                                    ),
                                },
                            ],
                        },
                        name: 'zh',
                    },
                ],
            },

        ],
    },
    mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
    wrapper: { className: 'home-page-wrapper banner5' },
    page: { className: 'home-page banner5-page' },
    childWrapper: {
        className: 'banner5-title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <FormattedMessage id="home.Banner.title" />
                    </span>
                ),
                className: 'banner5-title',
            },
            {
                name: 'explain',
                className: 'banner5-explain',
                children: (
                    <span>
                        <FormattedMessage id="home.Banner.explain" />
                    </span>
                ),
            },
            {
                name: 'content',
                className: 'banner5-content',
                children: (
                    <span>
                        <FormattedMessage id="home.Banner.content" />
                    </span>
                ),
            },
            {
                name: 'button',
                className: 'banner5-button-wrapper',
                children: {
                    className: 'banner5-button',
                    type: 'primary',
                    children: <Link to="/login"><FormattedMessage id="home.Banner.button" /></Link>,
                },
            },
        ],
    },
    image: {
        className: 'banner5-image',
        children:
            '/assets/banner.png',
    },
};
export const Feature30DataSource = {
    wrapper: { className: 'home-page-wrapper content3-wrapper' },
    page: { className: 'home-page content3' },
    OverPack: { playScale: 0.3 },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <span>
                            <FormattedMessage id="home.feature1.title" />
                        </span>
                    </span>
                ),
                className: 'title-h1',
            },
            {
                name: 'content',
                className: 'title-content',
                children: (
                    <span>
                        <FormattedMessage id="home.feature1.content" />
                    </span>
                ),
            },
        ],
    },
    block: {
        className: 'content3-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_cat.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.title1" />
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.content1" />
                                </span>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block1',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_cat.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.title2" />
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <span>
                                    <span>
                                        <FormattedMessage id="home.feature1.block.content2" />
                                    </span>
                                </span>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block2',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_cat.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.title3" />
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <FormattedMessage id="home.feature1.block.content3" />
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block3',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_dog.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.title4" />
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <FormattedMessage id="home.feature1.block.content4" />
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block4',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_dog.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <FormattedMessage id="home.feature1.block.title5" />
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <FormattedMessage id="home.feature1.block.content5" />
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block5',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                            '/assets/feature_dog.png',
                    },
                    textWrapper: { className: 'content3-text' },
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                                <span>
                                    <span>
                                        <FormattedMessage id="home.feature1.block.title6" />
                                    </span>
                                </span>
                            </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                                <FormattedMessage id="home.feature1.block.content6" />
                            </span>
                        ),
                    },
                },
            },
        ],
    },
};
export const Feature50DataSource = {
    wrapper: { className: 'home-page-wrapper content7-wrapper' },
    page: { className: 'home-page content7' },
    OverPack: {},
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <FormattedMessage id="home.feature2.title" />
                    </span>
                ),
                className: 'title-h1',
            },
            {
                name: 'content',
                children: (
                    <span>
                        <FormattedMessage id="home.feature2.content" />
                    </span>
                ),
            },
        ],
    },
    tabsWrapper: { className: 'content7-tabs-wrapper' },
    block: {
        children: [
            {
                name: 'block0',
                tag: {
                    className: 'content7-tag',
                    text: {
                        children: (
                            <span>
                                <FormattedMessage id="home.feature2.block.nav1" />
                            </span>
                        ),
                        className: 'content7-tag-name',
                    },
                    icon: { children: 'question' },
                },
                content: {
                    className: 'content7-content',
                    text: {
                        className: 'content7-text',
                        md: 14,
                        xs: 24,
                        children: (
                            <span>
                                <span>
                                    <span>
                                        <h2>
                                            <FormattedMessage id="home.feature2.block.title1" />
                                        </h2>
                                        <FormattedMessage id="home.feature2.block.content1" />
                                    </span>
                                </span>
                            </span>
                        ),
                    },
                    img: {
                        className: 'content7-img',
                        children:
                            'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
                        md: 10,
                        xs: 24,
                    },
                },
            },
            {
                name: 'block1',
                tag: {
                    className: 'content7-tag',
                    icon: { children: 'Question' },
                    text: {
                        className: 'content7-tag-name',
                        children: (
                            <span>
                                <FormattedMessage id="home.feature2.block.nav2" />
                            </span>
                        ),
                    },
                },
                content: {
                    className: 'content7-content',
                    text: {
                        className: 'content7-text',
                        md: 14,
                        xs: 24,
                        children: (
                            <span>
                                <span>
                                    <span>
                                        <h2>
                                            <FormattedMessage id="home.feature2.block.title2" />
                                        </h2>
                                        <FormattedMessage id="home.feature2.block.content2" />
                                    </span>
                                </span>
                            </span>
                        ),
                    },
                    img: {
                        className: 'content7-img',
                        md: 10,
                        xs: 24,
                        children:
                            'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
                    },
                },
            },
            {
                name: 'block2',
                tag: {
                    className: 'content7-tag',
                    text: {
                        children: (
                            <span>
                                <FormattedMessage id="home.feature2.block.nav3" />
                            </span>
                        ),
                        className: 'content7-tag-name',
                    },
                    icon: { children: 'Question' },
                },
                content: {
                    className: 'content7-content',
                    text: {
                        className: 'content7-text',
                        md: 14,
                        xs: 24,
                        children: (
                            <span>
                                <span>
                                    <span>
                                        <h2>
                                            <FormattedMessage id="home.feature2.block.title3" />
                                        </h2>
                                        <FormattedMessage id="home.feature2.block.content3" />
                                    </span>
                                </span>
                            </span>
                        ),
                    },
                    img: {
                        className: 'content7-img',
                        md: 10,
                        xs: 24,
                        children:
                            'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
                    },
                },
            },
        ],
    },
};
export const Footer00DataSource = {
    wrapper: { className: 'home-page-wrapper footer0-wrapper' },
    OverPack: { className: 'home-page footer0', playScale: 0.05 },
    copyright: {
        className: 'copyright',
        children: (
            <span>
                <span>
                    <span>
                        <span>©2020 HVPH</span>
                    </span>
                </span>
            </span>
        ),
    },
};
